# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from swagger_server.models.base_model_ import Model
from swagger_server import util


class InlineResponse2007(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, quality_report_url: Object=None):  # noqa: E501
        """InlineResponse2007 - a model defined in Swagger

        :param quality_report_url: The quality_report_url of this InlineResponse2007.  # noqa: E501
        :type quality_report_url: Object
        """
        self.swagger_types = {
            'quality_report_url': Object
        }

        self.attribute_map = {
            'quality_report_url': 'quality_report_url'
        }
        self._quality_report_url = quality_report_url

    @classmethod
    def from_dict(cls, dikt) -> 'InlineResponse2007':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The inline_response_200_7 of this InlineResponse2007.  # noqa: E501
        :rtype: InlineResponse2007
        """
        return util.deserialize_model(dikt, cls)

    @property
    def quality_report_url(self) -> Object:
        """Gets the quality_report_url of this InlineResponse2007.

        URL to download the data quality report.  # noqa: E501

        :return: The quality_report_url of this InlineResponse2007.
        :rtype: Object
        """
        return self._quality_report_url

    @quality_report_url.setter
    def quality_report_url(self, quality_report_url: Object):
        """Sets the quality_report_url of this InlineResponse2007.

        URL to download the data quality report.  # noqa: E501

        :param quality_report_url: The quality_report_url of this InlineResponse2007.
        :type quality_report_url: Object
        """

        self._quality_report_url = quality_report_url